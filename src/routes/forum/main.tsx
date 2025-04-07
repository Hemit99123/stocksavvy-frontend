import SideBar from "@/components/common/SideBar"
import { PostList } from "@/components/forum/PostList"
import PageHeader from "@/components/common/PageHeader"
import NotReadyYet from "@/components/questions/NotReadyYet"
import { useForumTypeStore } from "@/store/forum"
import Me from "@/components/forum/Me"

const Forum = () => {

  const { type } = useForumTypeStore()

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
            storeHook={useForumTypeStore}
          />
          <main className="flex-1 px-4">
          { type === "Home" ? (
              <PostList />
            ) : type === "Me" ? (
              <Me />
            ) : null}
          </main>
        </div>
    </div>
  )
}

export default Forum;