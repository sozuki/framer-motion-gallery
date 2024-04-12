export default function Page() {
  return (
    <div className="w-full h-full bg-slate-950 text-white">
      <div className="flex flex-col w-full px-8 sm:px-20">
        <div className="flex py-8">
          <h1 className="text-4xl">Home</h1>
        </div>
        <div className="flex gap-4 sm:gap-16 flex-col sm:flex-row">
          
          <div className="basis-1/2">
            <p>This is a home page. Some text. Some text. Some text. Some text. Some text.</p>
          </div>
          <div className="basis-1/2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}