const TitlePage = ({ title, showBtnAdd }) => {
    return (
        <div className='header_list md:px-20'>
            <h1 className="text-6xl Avenir font-semibold text-gray-900 md:mr-20">
                {title}
            </h1>
            {showBtnAdd && (
                <button className='black_btn'>
                    Add
                </button>
            )}

        </div>
    )
}

export default TitlePage