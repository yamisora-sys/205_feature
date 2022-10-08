import { Link } from 'react-router-dom'
import { Nav } from './Nav'

export function TestLayout() {
    return (
        <>
            <Nav />
            <div className="mx-auto mt-4 wrap w-75">
                <div className="list-group">
                    <Link to="/Test/Grammar" className="list-group-item list-group-item-action">
                        Ngữ pháp
                    </Link>
                    <Link to="/Test/Vocabulary" className="list-group-item list-group-item-action">
                        Từ vựng
                    </Link>
                    <Link to="/Test/Reading" className="list-group-item list-group-item-action">
                        Đọc hiểu
                    </Link>
                    <Link to="/Test/Listening" className="list-group-item list-group-item-action">
                        Nghe hiểu
                    </Link>
                </div>
            </div>
        </>
    )
}
