export interface Breadcrumb {
    label: string;
    href?: string;
  }
  
export interface UpBreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
  