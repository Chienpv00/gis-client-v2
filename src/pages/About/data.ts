import { IImages, ISectionAbout } from '~/@types/inteface';
import section1 from '../../assets/image 2.png';
import section2 from '../../assets/Rectangle 26.png';
import section3 from '../../assets/Rectangle 27.png';
import section4 from '../../assets/Rectangle 28.png';
import section5 from '../../assets/Rectangle 30.png';

export const dataImages: ISectionAbout[] = [
    {
        images: {
            src: section1,
            alt: 'UIT1',
            height: 400,
            radius: 24,
            width: 615,
        },
        description: `Trường Đại học Công nghệ Thông tin (ĐH CNTT), Đại học Quốc gia Thành phố Hồ Chí Minh (ĐHQG-HCM) là trường đại học công lập đào tạo về công nghệ thông tin và truyền thông (CNTT&TT) được thành lập theo quyết định số 134/2006/QĐ-TTg ngày 08/06/2006 .
        Sau hơn 10 năm xây dựng và phát triển, hiện trường ĐH CNTT sở hữu cơ sở vật chất gồm khu học tập, nghiên cứu và làm việc được đầu tư xây dựng khang trang, hiện đại với tổng diện tích trên 14 hecta trong khuôn viên khu đô thị ĐHQG-HCM.`,
        title: 'Tổng quan về Trường ĐH Công nghệ Thông tin',
    },
    {
        images: {
            src: section2,
            alt: 'UIT2',
            height: 425,
            radius: 33,
            width: 740,
        },
        description: `Đây cũng là giá trị cốt lõi trong vận hành và phát triển nhà trường, xác lập vị trí là trường ĐH hàng đầu trong lĩnh vực CNTT tại Việt Nam
        Tính đến nay, số lượng giảng viên trình độ sau đại học thuộc lĩnh vực CNTT&TT chiếm tỷ lệ trên 93% tổng số nhà giáo cơ hữu trong đó có 01 Giáo sư, 06 Phó Giáo sư, 58 Tiến sĩ và 144 Thạc sỹ.`,
        title: 'Trường ĐH CNTT có triết lý giáo dục là "Toàn diện, sáng tạo, phụng sự ”',
    },
    {
        images: [
            {
                src: section3,
                alt: 'UIT3',
                height: 349,
                radius: 17,
                width: 252,
            },
            {
                src: section4,
                alt: 'UIT4',
                height: 349,
                radius: 17,
                width: 252,
            },
        ],
        description: `Trường có 17 chương trình chính quy đào tạo bậc kỹ sư và cử nhân. Bên cạnh đó, là một trong 08 trường trọng điểm về đào tạo ngành An toàn Thông tin của Việt Nam và đáp ứng các nhu cầu đặc biệt của xã hộirường có 07 chương trình đào tạo đặc biệt (hệ chính quy) các ngành: kỹ sư tài năng ngành An toàn Thông tin, chương trình tiên tiến ngành Hệ thống Thông tin, cử nhân tài năng ngành Khoa học Máy tính v.v…Ở bậc đào tạo sau đại học, có 03 chương trình đào tạo trình độ thạc sĩ (ngành khoa học máy tính, công nghệ thông tin và hệ thống thông tin) và 02 chương trình đào tạo trình độ tiến sĩ (ngành khoa học máy tính và công nghệ thông tin). Tổng số sinh viên, học viên cao học và nghiên cứu sinh hiện nay của Trường là hơn 6.000.`,
        title: 'Các chương trình đào tạo hiện nay tại trường',
    },
    {
        images: {
            src: section5,
            alt: 'UIT5',
            height: 904,
            radius: 17,
            width: 542,
        },
        description: `Các hướng nghiên cứu chủ lực của thuộc lĩnh vực An toàn thông tin (Information Security), Internet vạn vật (Internet of Things), Trí tuệ nhân tạo (Artificial Intelligent), Khoa học dữ liệu (Data Sciences) và Thiết kế vi mạch (VLSI Design). Ngoài ra các hướng nghiên cứu khác vẫn được trường ĐH CNTT tiếp tục đầu tư và thúc đẩy như: Thương mại điện tử (E-Commerce) Công nghệ tri thức (Knowledge Engineering), Xử lý đa phương tiện (Multimedia Processing), Hệ thống thông tin (Information Systems), Kỹ thuật phần mềm (Software Engineering). Những hội thảo trong nước và quốc tế do trường ĐH CNTT tổ chức đã và đang trở thành diễn đàn để các nhà nghiên cứu khoa học trao đổi và hợp tác nghiên cứu về các vấn đề cùng quan tâm. Hoạt động quan hệ đối ngoại của Trường ngày càng mở rộng và đi vào chiều sâu, phục vụ thiết thực công tác đào tạo và nghiên cứu khoa học. Trường đã tạo được mối quan hệ tốt với các trường đại học, viện nghiên cứu, các doanh nghiệp, các tổ chức trong và ngoài nước trong nghiên cứu khoa học, liên kết đào tạo, trao đổi giảng viên, học viên và cung ứng nguồn nhân lực.`,
        title: 'Nâng cao liên tục chất lượng để thích nghi và luôn tiến về phía trước.',
    },
];
