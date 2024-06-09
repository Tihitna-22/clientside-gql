import Status from './Status'
import { Trash } from 'lucide-react'
import {useMutation} from '@urql/next'
import {DeleteIssueMutation} from '@/gql/deleteIssueMutation'

const Issue = ({ issue, reply }: any) => {
  const displayId = issue.id.split('-').pop().slice(-3)

  const [res, deleteIssue] = useMutation(DeleteIssueMutation)

  const handleDelete = async() => {
 const res =  await deleteIssue({deleteIssueId: issue.id})
 if(res.data) {
     reply()
 }
  }

  return (
    <div className="px-4 h-[40px] border-b flex items-center hover:bg-slate-50 gap-4">
      <span className="text-sm text-slate-300 w-[80px]">
        {`PAR-${displayId}`.toUpperCase()}
      </span>
      <Status status={issue.status} issueId={issue.id} />
      <span>{issue.name}</span>
      <span className="text-slate-300 ml-auto" onClick={handleDelete}><Trash color='red' size={14} /></span>
    </div>
  )
}

export default Issue
