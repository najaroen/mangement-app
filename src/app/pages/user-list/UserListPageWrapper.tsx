import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import UserTablecomponent from './UserTable';
const UsersPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Hello</PageTitle>
      <UserTablecomponent className=''/>
    </>
  )
}

export default UsersPageWrapper;
