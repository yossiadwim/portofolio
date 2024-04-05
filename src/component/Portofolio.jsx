const Portofolio = () => {
    return (
        <section id="portofolio" className="pt-36 p-16 bg-slate-100">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-teal-500">Portofolio</h4>
                    <h2 className="font-bold text-black text-3xl mb-4">Latest Project</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quo nobis inventore mollitia magni magnam doloribus totam temporibus eligendi quod.</p>
                </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="/img/kedebook.png" alt="image" width="w-full" className="hover:opacity-50" />

                    </div>
                    <h3 className="font-semibold txt-xl text-black mt-5 mb-3">Ke De Book Store</h3>
                    <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus eligendi consequatur!</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="/img/newjerusalem.png" alt="image" width="w-full" className="hover:opacity-50"/>

                    </div>
                    <h3 className="font-semibold txt-xl text-black mt-5 mb-3">New Jerusalem</h3>
                    <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus eligendi consequatur!</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="/img/satunama.png" alt="image" width="w-full" className="hover:opacity-50"/>

                    </div>
                    <h3 className="font-semibold txt-xl text-black mt-5 mb-3">Monitoring Recruitment System</h3>
                    <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus eligendi consequatur!</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="/img/coding.jpg" alt="image" width="w-full" className="hover:opacity-50" />

                    </div>
                    <h3 className="font-semibold txt-xl text-black mt-5 mb-3">Bookshelf API</h3>
                    <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus eligendi consequatur!</p>
                </div>
            </div>
        </section>
    )
}

export default Portofolio