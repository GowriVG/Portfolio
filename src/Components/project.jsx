const Projects = () => {
    return(
        <div className = ""pb-4>
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {Projects.MAP((project, index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                        img</div>

                    </div>
                ))}

            </div>
        </div>
    )
}