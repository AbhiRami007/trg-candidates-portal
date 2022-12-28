import React from 'react'
import {ProfileDetails} from '../../../accounts/components/settings/cards/ProfileDetails'
import {SignInMethod} from '../../../accounts/components/settings/cards/SignInMethod'
import {ConnectedAccounts} from '../../../accounts/components/settings/cards/ConnectedAccounts'
import {EmailPreferences} from '../../../accounts/components/settings/cards/EmailPreferences'
import {Notifications} from '../../../accounts/components/settings/cards/Notifications'
import {DeactivateAccount} from '../../../accounts/components/settings/cards/DeactivateAccount'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <SignInMethod />
      <DeactivateAccount />
    </>
  )
}
