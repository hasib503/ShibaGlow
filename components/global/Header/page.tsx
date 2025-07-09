import { Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/",
    alt: "logo",
    title: "title",
  },
  menu = [
    { title: "Home", url: "#home" },

    {
      title: "Introduction",
      url: "#about",
    },
    {
      title: "Sponsors",
      url: "#sponsors",
    },
    {
      title: "Tokenomics",
      url: "#tokenomics",
    },
    {
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      title: "Holders’ Benefits",
      url: "#benefits",
    },
  ],
}: NavbarProps) => {
  return (
    <section className="py-4">
      <div className="container mx-auto max-w-5xl">
        {/* Desktop Menu */}
        <nav className="hidden justify-end md:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            {/* <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 border" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a> */}
            <div className="flex items-center text-white ">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="px-4 py-2 font-medium whitespace-nowrap hover:text-[#94571C]"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Button className="bg-white hover:bg-slate-100 cursor-pointer text-black uppercase p-6 rounded">WhitePaper</Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block md:hidden mx-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    {/* <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a> */}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};



const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
