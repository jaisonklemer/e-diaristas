import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from './PageTitle.style'

interface PageTitleProps {
    title: String,
    subtitle?: String
}

const PageTitle: React.FC<PageTitleProps> = (props) =>{
    return (
        <PageTitleContainer>
            <PageTitleStyled>
            {props.title}
            </PageTitleStyled>
            
            <PageSubTitleStyled>
            {props.subtitle}
            </PageSubTitleStyled>

        </PageTitleContainer>
    )
}

export default PageTitle;