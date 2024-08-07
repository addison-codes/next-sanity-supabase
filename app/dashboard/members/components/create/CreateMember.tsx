import React from 'react'

import { Button } from '@/components/ui/button'

import DailogForm from '../DialogForm'
import CreateForm from './CreateForm'

export default function CreateMember() {
  return (
    <DailogForm
      id="create-trigger"
      title="Create Member"
      Trigger={<Button variant="outline">Create+</Button>}
      form={<CreateForm />}
    />
  )
}
