import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

export function JobsListing() {
  const userInfo: any = localStorage.getItem('userData')
  const [user]: any = useState(JSON.parse(userInfo))
  return (
    <>
      <div
        className='d-flex flex-wrap justify-content-center'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_1'
      >
        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
          </div>
        </div>

        <div className='m-5 w-75'>
          <div className='card card-stretch-100 shadow mb-2'>
            <div className='card-header m-5'>
              <h3 className='card-title'>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/media/books/1.png')}
              className='card-body m-5 h-500px'
              alt='img'
            />
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
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
