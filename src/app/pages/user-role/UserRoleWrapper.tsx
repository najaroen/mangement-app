import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import UserRoleTablecomponent from './UserRoleTable';
const UsersRoleWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>User Role</PageTitle>
      <UserRoleTablecomponent className=''/>
    </>
  )
}

export default UsersRoleWrapper;
