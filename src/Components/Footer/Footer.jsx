import { styled } from 'styled-components';
import ContainerCenter from '../Container/ContainerCenter';
import ContainerColumn from '../Container/ContainerColumn';
import ContainerRow from '../Container/ContainerRow';

const FooterContainer = styled.footer`
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #D9D9D9;
    color: white;
`;

const One_of_three = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Logo = styled.div`
    width: 200px;
    height: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Icon = styled.div`
    width: 20px;
    height: 20px;
    img {
         width: 100%;
        height: 100%;
    }
`

const Sizedbox = styled.div`
    width: 10px;
    height: 20px;
`

const Row_for_insta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
`;

export default function Component() {
    return (
        <FooterContainer>
            <One_of_three>
                <Logo>
                    <img src="img/로고.svg" alt="로고" />
                </Logo>
            </One_of_three>
            <One_of_three>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>COMPANY</p>
                    <Sizedbox />
                    <p>상호: Dr.Law</p>
                    <p>사업자 등록 번호: NNNNNNNNN</p>
                    <Sizedbox />
                    <p>대표: 이수혁</p>
                </ContainerColumn>
            </One_of_three>
            <One_of_three>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>CONTACT US</p>
                    <Sizedbox />
                    <Row_for_insta gap='10px'>
                        <Icon>
                            <img src="img/icon_insta.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>DrLaw.Official</p>
                    </Row_for_insta>
                    <Sizedbox />
                    <ContainerRow>
                        <Icon>
                            <img src="img/icon_email.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>xxxxxxxxx@gmail.com</p>
                    </ContainerRow>
                </ContainerColumn>
            </One_of_three>
        </FooterContainer>
    );
};