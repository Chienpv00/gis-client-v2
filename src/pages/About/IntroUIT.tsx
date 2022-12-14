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
                ?????n nay, tr?????ng ??H CNTT t??? h??o c?? 100% sinh vi??n t???t nghi???p c?? vi???c l??m. Trong ???? c?? tr??n 90% sinh vi??n
                t???t nghi???p c?? vi???c l??m ????ng v???i chuy??n ng??nh ???????c ????o t???o. ?????t ???????c k???t qu??? tr??n l?? t???ng h???p c???a nhi???u
                y???u t???: s??? t??ng c?????ng ?????u t?? c?? s??? v???t ch???t, trang thi???t b??? ph???c c??ng t??c d???y h???c v?? nghi??n c???u c???a sinh
                vi??n v?? gi???ng vi??n; tinh th???n gi???ng d???y t???n t??nh, y??u ngh??? v?? lu??n s??t c??nh c??ng sinh vi??n c???a gi???ng
                vi??n; s??? ?????u t??, h??? tr??? c???a c??c t??? ch???c v?? doanh nghi???p; s??? h??? tr??? t??ch c???c c???a c??c t??? ch???c ??o??n Thanh
                ni??n, H???i sinh vi??n ????? sinh vi??n kh??ng ch??? gi???i trong h???c t???p m?? c??n c?? tinh th???n tr??ch nhi???m tham gia
                c??c ho???t ?????ng x?? h???i, g??p ph???n x??y d???ng ?????t n?????c ti???n b??? h??n v?? l??m ?????p cho x?? h???i.
            </div>
        </>
    );
};

export default IntroUIT;
