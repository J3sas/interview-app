import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GenericSrvcService } from 'src/app/services/generic-srvc.service';
import { map } from 'rxjs/operators';


interface IBook {
  id: number;
  attributes: string;
  links : string;
  relationship: string;
  type: string;
}

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  private trueDataSource !: IBook[];
  public dataSource: MatTableDataSource<IBook> = new MatTableDataSource<IBook>();
  public displayedColumns: string[] = ['id', 'attributes', 'links', 'relationship', 'type'];
  public filterSettings = {filterKeyword : '' , selectedColumn : 'id'};
  
  constructor(
    private dataService: GenericSrvcService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.accessJsonPayload();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  private accessJsonPayload():void{
    // Access the JSON file and re map for table
    this.dataService.getJsonData().pipe(
      map((data) => {
        return data.data.map((item: any) => ({
          id: item.id,
          attributes: item.attributes.content,
          links: item.links.self,
          relationship: item.relationships.authors.links.related,
          type: item.type,
        }));
      })
    ).subscribe((remappedData) => {
      this.dataSource.data = remappedData;
      this.trueDataSource = remappedData;
    });
  }

  public updateFilter(event: any): void {
    this.filterSettings.filterKeyword = event.target.value;
  }

  public onSearch(): void {
    // When button is pressed if no search keyword return to original data else filter from source to the filtered data table
    const { filterKeyword, selectedColumn } = this.filterSettings;
  
    if (!filterKeyword || !selectedColumn) {
      this.dataSource.data = this.trueDataSource;
    }

    this.dataSource.data = this.trueDataSource.filter((item) => {
      const columnValue = String(item[selectedColumn as keyof IBook]).toLowerCase();
      return columnValue.includes(filterKeyword.toLowerCase());
    });

  }

  public selectColumn(event: any): void {
    this.filterSettings.selectedColumn = event.target.value;
  }

  public announceSortChange(sortState: Sort): void {
    // Responsible of the sort headers of the table
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
