import { Pencil1Icon } from '@radix-ui/react-icons'
import React from 'react'

import { Button } from '@/components/ui/button'

import DailogForm from '../DialogForm'
import EditForm from './EditorForm'

export default function EditMember() {
  return (
    <DailogForm
      id="update-trigger"
      title="Edit Member"
      Trigger={
        <Button variant="outline">
          <Pencil1Icon />
          Edit
        </Button>
      }
      form={<EditForm />}
    />
  )
}
