import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { useState } from 'react';

const Admin = () => {
    const [value, setValue] = useState(0);
    const [file, setFile] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log(file);
    };

    return (
        <div className="">
            <Select onChange={handleChange} value={value} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value={0}>Tòa E</MenuItem>
                <MenuItem value={1}>Tòa A</MenuItem>
                <MenuItem value={2}>Tòa B</MenuItem>
                <MenuItem value={3}>Tòa C</MenuItem>
            </Select>

            <Button className="ms-5" variant="contained" component="label">
                Tải lên file JSON
                <input
                    onChange={(e) => {
                        setFile(e.target.value);
                    }}
                    type="file"
                    accept=".json"
                    hidden
                />
            </Button>
            <Button onClick={handleSubmit} className="ms-2">
                Lưu
            </Button>
        </div>
    );
};

export default Admin;
