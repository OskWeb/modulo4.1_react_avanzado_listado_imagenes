import { AppLayout } from "../layout/app.layout"
import { PageHeaderContainer } from "../pods/pageHeader"
import { ListCatsContainer } from "../pods/listCats"

export const ListCatsPage: React.FC = () => {
    return (
        <AppLayout>
            <PageHeaderContainer />
            <ListCatsContainer />
        </AppLayout>
    )
}