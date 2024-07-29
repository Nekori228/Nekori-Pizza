import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
    </Container>
    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">Список товаров</div>
        </div>
      </div>
    </Container>
  </>;
}
