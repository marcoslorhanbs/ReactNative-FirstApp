import styled from 'styled-components/native';
export const WhiteText = styled.Text`
  color: white;
`;

export const BasicBtn = styled.Pressable`
    box-sizing: border-box;

    /* Auto layout */

    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    gap: 8px;

    font-weight: bold;

    /* 🔅 Primary/100 */
    background: rgba(0,0,0,0);

    /* 🔅 Primary/700 */
    border: 1px solid #47B5FF;
    border-radius: 4px;
`;

export const Card = styled.View`


    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin-top: 2%;
    width: 95%;
    

    /* 🔅 Primary/500 */
    background-color: #6c95e6;

    /* 🔅 Gray/200 */
    border: 1px solid #EAECF0;
    border-radius: 8px;
    `;

export const CardContent = styled.View`
    /* card-content */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 16px;


    width: 400px;
    height: 156px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const CardTitle = styled.Text`
    /* Title */

    width: 352px;
    height: 26px;

    /* Paragraph/LG/Semibold */
   

    /* identical to box height, or 26px */

    /* Base/White */
    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const CardSub = styled.Text`
    width: 352px;
    height: 22px;

    /* or 22px */

    /* 🔅 Gray/300 */
    color: #EEFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 3;
`;


export const TopBar = styled.View`
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 390px;
    height: 64px;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    z-index: 1;

`;

export const TopContainer = styled.View`
    /* header-container */
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;

    width: 390px;
    height: 64px;

    /* 🔅 Background/Default */
    background: #FFFFFF;

    /* 🔅 Gray/200 */
    border-width: 1px;
    border-style: solid;
    border-color: #EAECF0;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const TopTitle = styled.View`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 123px;
    height: 32px;

    background: rgba(255, 255, 255, 1e-05);

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const MenuBtn = styled.Pressable`
    box-sizing: border-box;

    width: 48px;
    height: 34px;

    /* 🔅 Background/Default */
    background: #FFFFFF;

    /* 🔅 Background/Default */
    border: 1px solid #FFFFFF;
    border-radius: 4px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`;