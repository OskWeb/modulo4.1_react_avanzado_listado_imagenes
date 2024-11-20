import { AppLayout } from "../layout/app.layout"
import { PageHeaderContainer } from "../pods/pageHeader"
import { ListDogsContainer } from "../pods/listDogs"

export const ListDogsPage: React.FC = () => {

    return (
        <AppLayout>
            <PageHeaderContainer />
            <ListDogsContainer />
        </AppLayout>
    )

}