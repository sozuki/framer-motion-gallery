export default function Page() {
  return (
    <div className="w-full h-full bg-slate-950 text-white">
      <div className="flex flex-col w-full px-8 sm:px-20">
        <div className="flex py-8">
          <h1 className="text-4xl">Contact</h1>
        </div>
        <div className="flex gap-4 sm:gap-16 flex-col sm:flex-row">
          
          <div className="basis-1/2">
            <p>This is a contact page. Some text. Some text. Some text. Some text. Some text.</p>
          </div>
          <div className="basis-1/2">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}