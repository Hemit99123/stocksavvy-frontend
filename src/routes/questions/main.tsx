import PageHeader from '@/components/common/PageHeader'
import NotReadyYet from './components/NotReadyYet'
import QuestionView from './components/QuestionView'
import Sidebar from '@/components/common/SideBar'
import { useQuestionTypeStore } from "@/store/questions" 

const Questions = () => {
  return (
    <div>
      <PageHeader 
        title="Financial Questions"
        description="Let&apos;s test your financial skills! Explore below..."
        sideComponent={<NotReadyYet />}
      />

      <div className="lg:flex flex-col lg:flex-row px-px justify-center ">
        <Sidebar
          page="question"
          storeHook={useQuestionTypeStore}
        />
        <div className="flex flex-grow justify-center"> 
          <QuestionView />
        </div>
      </div>
    </div>
  )
}

export default Questions
