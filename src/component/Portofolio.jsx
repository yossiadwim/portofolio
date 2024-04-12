const Portofolio = () => {
  return (
    <section id="portofolio" className="bg-slate-100 p-16 pt-36">
      <div className="w-full px-4">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h4 className="text-lg font-semibold text-teal-500 lg:text-2xl">
            Portofolio
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-black">Latest Project</h2>
          <p>Below are some of the projects I have worked on</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center px-4">
        <div className="mb-12 p-4 md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-md">
            <img
              src="/img/kedebook.png"
              alt="image"
              width="w-full"
              className="hover:opacity-50"
            />
          </div>
          <h3 className="txt-xl mb-3 mt-5 font-semibold text-black">
            Ke De Book Store
          </h3>
          <p className="text-justify text-base font-medium text-slate-500">
            Ke de book store is a website developed individually as a final
            assignment for the Pemrograman Web Lanjut ceourse. This website was
            built using JavaScript with the Vue.js framework and uses Firestore
            as the database. On this website, users can log in, search for
            books, add books to the basket and add order data to the database.
          </p>

          <p className="mt-3 font-medium text-slate-500">
            <a
              href="https://github.com/yossiadwim/Kedebookstore"
              target="blank"
              className="underline underline-offset-4"
            >
              {" "}
              Link Github
            </a>
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-md">
            <img
              src="/img/newjerusalem.png"
              alt="image"
              width="w-full"
              className="hover:opacity-50"
            />
          </div>
          <h3 className="txt-xl mb-3 mt-5 font-semibold text-black">
            New Jerusalem
          </h3>
          <p className="text-justify text-base font-medium text-slate-500">
            New Jerusalem is an application developed in groups as part of the
            final assignment for a Rekayasa Perangkat Lunak course. This
            application was built using Java and Maven and uses a SQL database.
            New Jerusalem can display the Bible, search for verses, chapters and
            books, display map visualizations, visualize the descendants of Adam
            and his descendants, as well as search for places and events in the
            Bible
          </p>

          <p className="mt-3 font-medium text-slate-500">
            <a
              href="https://github.com/yossiadwim/New-Jerusalem"
              target="blank"
              className="underline underline-offset-4"
            >
              {" "}
              Link Github
            </a>
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-md">
            <img
              src="/img/satunama.png"
              alt="image"
              width="w-full"
              className="hover:opacity-50"
            />
          </div>
          <h3 className="txt-xl mb-3 mt-5 font-semibold text-black">
            Monitoring Recruitment System
          </h3>
          <p className="text-justify text-base font-medium text-slate-500">
            The recruitment monitoring system was developed as a final
            assignment for the thesis course. In this system there are two
            users, namely, applicants and HRD. From the applicant side, users
            can apply for jobs, complete their profile, and can monitor the
            progress of the recruitment process. From the HRD side, users can
            create vacancies, change and deactivate vacancies, transfer
            applicant status, and view applicant data. This system was built
            using PHP, Laravel framework, JavaScript, Bootstrap, and PostgreSQL.
            This system will later be used for non-profit foundations as part of
            digitizing the recruitment process.
          </p>
          <p className="mt-3 font-medium text-slate-500">
            <a
              href="https://github.com/yossiadwim/rekrutmen-hrd"
              target="blank"
              className="underline underline-offset-4"
            >
              {" "}
              Link Github
            </a>
          </p>
        </div>
        <div className="mb-12 p-4 md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-md">
            <img
              src="/img/portfolio.png"
              alt="image"
              width="w-full"
              className="hover:opacity-50"
            />
          </div>
          <h3 className="txt-xl mb-3 mt-5 font-semibold text-black">
            My Portofolio
          </h3>
          <p className="text-base font-medium text-slate-500 text-justify">
            My Portfolio is a website that was developed to be an important tool
            in building personal branding, reaching potential clients, and
            opening doors to new opportunities. This website also includes
            several projects that have been carried out by the creator to help
            show what has been done so far. This website was built using Reactjs
            and tailwind CSS.
          </p>
          <p className="mt-3 font-medium text-slate-500">
            <a
              href="https://github.com/yossiadwim/portofolio"
              target="blank"
              className="underline underline-offset-4"
            >
              {" "}
              Link Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
