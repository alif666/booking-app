
import React from 'react'

export default function UsernameInputFIeld() {
    return (
        <div>
            <input type="text" name="username" required className="leading border rounded-lg user-invalid:border-red-500" />
        </div>
    )
}
