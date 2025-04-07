import PageHeader from '@/components/common/PageHeader'
import QuestionView from '@/components/questions/QuestionView'
import Sidebar from '@/components/questions/SideBar'

const Questions = () => {
  return (
    <div>
      <PageHeader 
        title="Financial Questions"
        description="Let&apos;s test your financial skills! Explore below..."
        sideComponent
      />

      {/* Main content with Sidebar and Question View */}
      <div className="lg:flex flex-col lg:flex-row px-px justify-center ">
        <Sidebar/> {/* Fixed width for sidebar */}
        <div className="flex flex-grow justify-center"> {/* Center the QuestionView */}
          <QuestionView />
        </div>
      </div>
    </div>
  )
}

export default Questions
