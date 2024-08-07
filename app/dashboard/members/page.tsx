import React from 'react'

import CreateMember from './components/create/CreateMember'
import MemberTable from './components/MemberTable'
import SearchMembers from './components/SearchMembers'

export default function Members() {
  return (
    <div className="w-full px-3 space-y-5 overflow-y-auto">
      <h1 className="text-3xl font-bold">Members</h1>
      <div className="flex gap-2">
        <SearchMembers />
        <CreateMember />
      </div>
      <MemberTable />
    </div>
  )
}
