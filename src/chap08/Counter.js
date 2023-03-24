import React, {useState} from 'react';

const Counter = () => {
    const [value, setVale] = useState(0);

    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
            <button onClick={() => setVale(value + 1)}>+1</button>
            <button onClick={() => setVale(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;