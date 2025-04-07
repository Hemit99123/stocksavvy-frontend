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
            ) : type == "None" ? (
              <>
                <div className="text-center">
                  <hr className="w-52 h-0.5 mx-auto bg-gray-300 border-0 rounded-sm my-2" />
                  <h1 className="font-bold text-lg">Let's get started 🚀</h1>
                  <p className="text-gray-500">Click one of the features in the sidebar to start!</p>
                </div>
              </>
            ): null}
          </main>
        </div>
    </div>
  )
}

export default Forum;