import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

import { Table, TableHead, TableHeader } from '@/components/ui/table'

import ListOfMembers from './ListOfMembers'

export default function MemberTable() {
  const tableHeader = ['Name', 'Role', 'Joined', 'Status']

  return (
    <Table>
      <TableHeader>
        {tableHeader.map((header, index) => (
          <TableHead key={index}>{header}</TableHead>
        ))}
      </TableHeader>
      <ListOfMembers />
    </Table>
  )
}
