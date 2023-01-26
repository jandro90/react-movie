export const About = () => {
  return (
    <div className="container">
    <h1 className="text-center m-2">About the project</h1>
    <hr />
    <div className="container-fluid">
        <p>
            I have created this project to use all the knowledge I have
            learned about <b>React & React Tool Kit.</b> I have tried
            to use most of the things that a framework / library can provide
            to build applications.
        </p>
        <p>For example:</p>
        <ul>
            <li><b>Components:</b></li>
            <ul>
                <li>Create custom components looking for reusability</li>
                <li>Using Props</li>
                <li>Using Emitters</li>
                <li>Access to DOM elements</li>
                <li>Creating views with bussiness logic</li>
                <li>Creating reusable hooks</li>
            </ul>
            <li><b>Router:</b></li>
            <ul>
              <li>Using React Router <b>v6.7.0</b></li>
                <li>Creating all routes with Lazzy Load</li>
                <li>Using Guards in differents pages</li>
                <li>Control active route</li>
                <li>Using Main Routes and Child Routes</li>
                <li>Creating simple menú</li>
            </ul>
            <li><b>Redux:</b></li>
            <ul>
                <li>
                    Split store in modules, based in app requirements,
                    looking for easy maintenance
                </li>
                <li>Create API structure, using <b>RTK Query</b> for avoid duplicate calls and improve performance</li>
                <li>Using Slices</li>
                <li>Create custom reducers for every Slice</li>
            </ul>
            <li><b>Extras:</b></li>
            <ul>
                <li>
                    I create a fake login, the objective is that when a user is logged in, to
                    persist that login avoiding to lose the user when the
                    page is refreshed. The main objective is not to show the
                    login page if the user is logged in and in case the user
                    is NOT logged in, to avoid enter in any path of the
                    application.
                </li>
            </ul>
        </ul>
    </div>
</div>
  )
}

export default About;