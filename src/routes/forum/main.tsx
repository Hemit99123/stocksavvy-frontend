import SideBar from "@/components/common/SideBar"
import { PostList } from "@/components/forum/PostList"
import PageHeader from "@/components/common/PageHeader"
import NotReadyYet from "@/components/questions/NotReadyYet"

const Forum = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Stock Forum"
        description="Learn and share financial knowledge for free!"
        sideComponent={<NotReadyYet />}
      />
        <div className="flex">
          <SideBar 
            page="forum"
          />
          <main className="flex-1 px-4">
            <h1 className="text-2xl font-bold text-green-800 mb-6">Recent Posts</h1>
            <div className="space-y-4">
              <PostList />
            </div>
          </main>
        </div>
    </div>
  )
}

export default Forum;