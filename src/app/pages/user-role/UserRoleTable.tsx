/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../_metronic/helpers'

type Props = {
  className: string
}

const UserRoleTablecomponent: React.FC<Props> = ({className}) => {
  const List = [1, 2, 3, 4, 5, 6, 7, 8]  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 flex-row pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Members Statistics</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-140px'>Assign to</th>
                <th className='min-w-120px'>Create Date</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {
                List && List.map((value) => (
                    <tr key={`index_of_user_role${value}`}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Rachanon
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        Brasil
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        05/28/2020
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>Code: Paid</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                      </a>
                      <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                        <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                      </a>
                    </td>
                  </tr>
                ))        
              }
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export default UserRoleTablecomponent;
