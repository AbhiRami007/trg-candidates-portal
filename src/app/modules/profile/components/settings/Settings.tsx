import React from 'react'
import {ProfileDetails} from '../../../accounts/components/settings/cards/ProfileDetails'
import {SignInMethod} from '../../../accounts/components/settings/cards/SignInMethod'
import {ConnectedAccounts} from '../../../accounts/components/settings/cards/ConnectedAccounts'
import {EmailPreferences} from '../../../accounts/components/settings/cards/EmailPreferences'
import {Notifications} from '../../../accounts/components/settings/cards/Notifications'
import {DeactivateAccount} from '../../../accounts/components/settings/cards/DeactivateAccount'
import {AboutForm} from '../../AboutForm'
import {EducationForm} from '../../EducationForm'
import {ExperienceForm} from '../../ExperienceForm'

export function Settings() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bold my-2'>Profile Settings</h3>

        <div className='d-flex flex-wrap my-2'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-xl form-select-white w-250px'
            defaultValue='Add Section'
          >
            <option value='Add Section'>Add New Section</option>
            <option value='Active'>Active</option>
            <option value='Approved'>In Progress</option>
            <option value='Declined'>To Do</option>
            <option value='In Progress'>Completed</option>
          </select>
        </div>
      </div>
      <AboutForm />
      <ProfileDetails />
      <EducationForm />
      <ExperienceForm />
      <SignInMethod />
      <DeactivateAccount />
    </>
  )
}
