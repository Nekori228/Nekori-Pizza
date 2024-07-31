import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
    </Container>
    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList title={"Пиццы"} items={[
              {
                id: 1,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 2,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 3,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 4,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 5,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 6,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
            ]} categoryId={1} />

<ProductGroupList title={"Комбо"} items={[
              {
                id: 7,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 8,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 9,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 10,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 11,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
              {
                id: 12,
                name: 'Маргаритта',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                print: 550,
                items: [{ price: 550}],
              },
            ]} categoryId={2} />
          </div>
        </div>
      </div>
    </Container>
  </>;
}
