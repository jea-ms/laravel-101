const TitlePage = ({ title, showBtnAdd, onAdd, onCancel }) => {
    return (
        <div className='header_list md:px-20'>
            <h1 className="text-5xl Avenir font-semibold text-gray-900 md:mr-20">
                {title}
            </h1>
            {showBtnAdd ? (
                <button onClick={onAdd} className='black_btn'>
                    Add
                </button>
            ) : (
                <button onClick={onCancel} className='black_btn'>
                    Cancel
                </button>
            )}

        </div>
    )
}

export default TitlePage