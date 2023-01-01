import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {IEducation} from './components/settings/SettingsModel'

const initialValues = {
  college: '',
  city: '',
  state: '',
  country: '',
  grade: '',
  course: '',
  description: '',
}
const profileDetailsSchema = Yup.object().shape({
  college: Yup.string().required('First name is required'),
  city: Yup.string().required('Last name is required'),
  state: Yup.string().required('Position name is required'),
  country: Yup.string().required('Company name is required'),
  grade: Yup.string().required('Contact phone is required'),
  course: Yup.string().required('Company site is required'),
  description: Yup.string().required('Country is required'),
})

const ExperienceForm: React.FC = () => {
  const [data, setData] = useState<IEducation>(initialValues)

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IEducation>({
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
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bold m-0'>Experience Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-semibold fs-6'>
                College Or University
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='College/University'
                  {...formik.getFieldProps('college')}
                />
                {formik.touched.college && formik.errors.college && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.college}</div>
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

export {ExperienceForm}
