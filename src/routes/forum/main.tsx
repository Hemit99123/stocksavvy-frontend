import SideBar from "@/components/common/SideBar"
import Home from "@/components/forum/Home"
import PageHeader from "@/components/common/PageHeader"
import NotReadyYet from "@/components/questions/NotReadyYet"
import { useForumTypeStore } from "@/store/forum"
import Me from "@/components/forum/Me"

const Forum = () => {

  const { type } = useForumTypeStore()

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Financial Forum"
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
              <Home />
            ) : type === "Me" ? (
              <Me />
            ) : null}
          </main>
        </div>
    </div>
  )
}

export default Forum;