import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {AUTH_LOCAL_STORAGE_KEY} from '../auth'
import {IAbout} from './components/settings/SettingsModel'

const initialValues = {about: ''}

const profileDetailsSchema = Yup.object().shape({
  company: Yup.string().required('Company name is required'),
})

const AboutForm: React.FC = () => {
  const [data, setData] = useState<IAbout>(initialValues)
  const navigate = useNavigate()
  const [user, setUser]: any = useState({})

  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    const userData = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
    if (userData) {
      setUser(JSON.parse(userData).userId)
      setAvatar(JSON.parse(userData).userId.avatar)
    } else {
      navigate('/auth/login')
    }
  }, [])

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IAbout>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-5'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bold m-0'>About Me</h3>
        </div>
      </div>
      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-semibold fs-6'>About</label>

              <div className='col-lg-8 fv-row'>
                <textarea
                  rows={5}
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Specify your years of experience, work history, achievements etc.'
                  {...formik.getFieldProps('about')}
                />
                {formik.touched.about && formik.errors.about && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.about}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {AboutForm}
