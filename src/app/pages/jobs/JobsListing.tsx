import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

export function JobsListing() {
  const userInfo: any = localStorage.getItem('userData')
  const [user]: any = useState(JSON.parse(userInfo))
  return (
    <>
      <div className='d-flex flex-wrap justify-content-center '>
        <div className='w-50'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card card-custom overlay overflow-hidden card-body'>
              <div className='card-body p-0'>
                <div className='overlay-wrapper'>
                  <img
                    src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
                    alt=''
                    className='w-100 rounded'
                  />
                  <div className='d-flex image-post'>
                    <h3>The Recruits Group</h3>
                    <p>Graphical Designer</p>
                  </div>
                </div>
                <div className='overlay-layer bg-dark bg-opacity-10'>
                  <a
                    href='#'
                    className='btn bg-theme'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_1'
                  >
                    Click to see job description
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='modal fade' id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div>
                <h5 className='modal-title'>What is Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>

              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <span className='svg-icon svg-icon-2x'></span>
              </div>
            </div>

            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='modal-body w-100 h-500px'
              alt='img'
            />

            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Apply
              </button>
              <button type='button' className='btn btn-primary'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
