import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#103157', color: '#fff', padding: '50px 90px' }}>
            <div className="row justify-content-lg-between">
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <Typography
                        variant="h6"
                        noWrap
                        style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '10px' }}
                    >
                        SỨ MẠNG
                    </Typography>
                    <p style={{ width: '100%', fontSize: '1rem' }}>
                        - Trường Đại học Công nghệ Thông tin là một trung tâm đào tạo đại học, sau đại học cung cấp
                        nguồn nhân lực chất lượng cao, nhằm đáp ứng nhu cầu của thị trường lao động và phục vụ cộng
                        đồng.
                    </p>
                    <p>
                        - Trường Đại học Công nghệ Thông tin là một trung tâm hàng đầu về nghiên cứu khoa học và chuyển
                        giao công nghệ về công nghệ thông tin – truyền thông và các lĩnh vực liên quan.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Typography
                        variant="h6"
                        noWrap
                        style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '10px' }}
                    >
                        LIÊN KẾT NHANH
                    </Typography>
                    <ul>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Trang tuyển sinh
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Đào tạo đại học
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Đào tạo sau đại học
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Văn phòng Các chương trình đặt biệt
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Phòng công tác sinh viên
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Thư viện
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: '#fff', fontWeight: '450' }} to="#">
                                Forum
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Typography
                        variant="h6"
                        noWrap
                        style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '10px' }}
                    >
                        LIÊN HỆ
                    </Typography>
                    <ul>
                        <li>
                            <span style={{ fontWeight: '400' }}>
                                ĐỊA CHỈ Khu phố 6, P. Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh
                            </span>
                        </li>
                        <li>
                            <span style={{ fontWeight: '400' }}>ĐIỆN THOẠI (028) 372 52002</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: '400' }}>FAX (028) 372 52148</span>
                        </li>
                        <li>
                            <span style={{ fontWeight: '400' }}>
                                EMAIL{' '}
                                <a style={{ color: '#fff' }} href="mailto:info@uit.edu.vn">
                                    info@uit.edu.vn
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="mt-4 col-lg-4 col-sm-12 col-md-6">
                        <Typography
                            variant="h6"
                            noWrap
                            style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '10px' }}
                        >
                            TẦM NHÌN
                        </Typography>
                        <p>
                            Trường Đại học Công nghệ Thông tin trở thành trường đại học uy tín về công nghệ thông tin –
                            truyền thông và các lĩnh vực liên quan trong khu vực Châu Á.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
