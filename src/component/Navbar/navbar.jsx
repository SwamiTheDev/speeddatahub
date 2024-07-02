export default function TopNav() {
    return (
        <>

            <ul
                className="nav nav-tabs"
                id="navId"
                role="tablist"
            >
                <li className="nav-item">
                    <a
                        href="#tab1Id"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-current="page"
                    >Active</a
                    >
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >Dropdown</a
                    >
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#tab2Id">Action</a>
                        <a className="dropdown-item" href="#tab3Id">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#tab4Id">Action</a>
                    </div>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tab5Id" className="nav-link" data-bs-toggle="tab"
                    >Another link</a
                    >
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#" className="nav-link disabled" data-bs-toggle="tab"
                    >Disabled</a
                    >
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab1Id" role="tabpanel">

                </div>
                <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
            </div>



        </>
    )
}