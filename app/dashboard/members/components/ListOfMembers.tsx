import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import EditMember from './edit/EditMember'

export default function ListOfMembers() {
  const members = [
    {
      name: 'Sokheng',
      role: 'admin',
      status: 'active',
    },
    {
      name: 'Sokheng',
      role: 'user',
      status: 'active',
    },
    {
      name: 'Sokheng',
      role: 'admin',
      status: 'resigned',
    },
    {
      name: 'Sokheng',
      role: 'user',
      status: 'active',
    },
  ]
  return (
    <div className="mx-2 bg-white rounded-sm dark:bg-inherit">
      {members.map((member, index) => {
        return (
          <div
            className="grid grid-cols-5 p-3 font-normal align-middle rounded-sm "
            key={index}
          >
            <h1>{member.name}</h1>

            <div>
              <span
                className={cn(
                  ' dark:bg-zinc-800 px-2 py-1 rounded-full shadow capitalize  border-[.5px] text-sm',
                  {
                    'border-green-500 text-green-600 bg-green-200':
                      member.role === 'admin',
                    'border-zinc-300 dark:text-yellow-300 dark:border-yellow-700 px-4 bg-yellow-50':
                      member.role === 'user',
                  },
                )}
              >
                {member.role}
              </span>
            </div>
            {/* <h1>{member.created_at}</h1> */}
            <div>
              <span
                className={cn(
                  ' dark:bg-zinc-800 px-2 py-1 rounded-full  capitalize text-sm border-zinc-300  border',
                  {
                    'text-green-600 px-4 dark:border-green-400 bg-green-200':
                      member.status === 'active',
                    'text-red-500 bg-red-100 dark:text-red-300 dark:border-red-400':
                      member.status === 'resigned',
                  },
                )}
              >
                {member.status}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* <Button variant="outline">
                <TrashIcon />
                Delete
              </Button>
              <EditMember /> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}
