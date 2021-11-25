import { Input } from 'antd'
import { useState } from 'react'

export const Body = () => {
    const [bookName, setBookName] = useState('')
    return (
        <>
            {bookName}
            <Input
                placeholder="Livro de interesse"
                onChange={e => setBookName(e.target.value)}
            />
        </>)
}