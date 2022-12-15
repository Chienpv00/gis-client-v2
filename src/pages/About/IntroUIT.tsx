import React from 'react';
import Images from '~/components/About/Images';
import { dataImages } from './data';
const IntroUIT = () => {
    return (
        <>
            {dataImages.length &&
                dataImages.map((item, index) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '2rem',
                            margin: '4rem auto',
                            padding: '4rem 0',
                            flexDirection: index % 2 ? 'row' : 'row-reverse',
                        }}
                    >
                        <div style={{ flexGrow: 1 }}>
                            <h2 style={{ fontSize: '2rem', color: '#103157', fontWeight: 700 }}>{item.title}</h2>
                            <p style={{ textAlign: 'justify' }}>{item.description}</p>
                        </div>
                        <div style={{ flexGrow: 2 }}>
                            {Array.isArray(item.images) ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '1rem',
                                    }}
                                >
                                    {item.images?.map((image) => (
                                        <Images
                                            src={image.src}
                                            alt={image.alt}
                                            height={image.height}
                                            width={image.width}
                                            key={image.src}
                                            radius={image.radius}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <Images
                                    src={item.images.src}
                                    alt={item.images.alt}
                                    height={item.images.height}
                                    width={item.images.width}
                                    key={item.images.src}
                                    radius={item.images.radius}
                                />
                            )}
                        </div>
                    </div>
                ))}

            <div style={{ padding: '3rem 0', fontWeight: 700 }}>
                Đến nay, trường ĐH CNTT tự hào có 100% sinh viên tốt nghiệp có việc làm. Trong đó có trên 90% sinh viên
                tốt nghiệp có việc làm đúng với chuyên ngành được đào tạo. Đạt được kết quả trên là tổng hợp của nhiều
                yếu tố: sự tăng cường đầu tư cơ sở vật chất, trang thiết bị phục công tác dạy học và nghiên cứu của sinh
                viên và giảng viên; tinh thần giảng dạy tận tình, yêu nghề và luôn sát cánh cùng sinh viên của giảng
                viên; sự đầu tư, hỗ trợ của các tổ chức và doanh nghiệp; sự hỗ trợ tích cực của các tổ chức Đoàn Thanh
                niên, Hội sinh viên để sinh viên không chỉ giỏi trong học tập mà còn có tinh thần trách nhiệm tham gia
                các hoạt động xã hội, góp phần xây dựng đất nước tiến bộ hơn và làm đẹp cho xã hội.
            </div>
        </>
    );
};

export default IntroUIT;
