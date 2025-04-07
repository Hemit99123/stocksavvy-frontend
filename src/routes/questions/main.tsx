import PageHeader from '@/components/common/PageHeader'
import NotReadyYet from '@/components/questions/NotReadyYet'
import QuestionView from '@/components/questions/QuestionView'
import Sidebar from '@/components/common/SideBar'

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
        />
        <div className="flex flex-grow justify-center"> 
          <QuestionView />
        </div>
      </div>
    </div>
  )
}

export default Questions
