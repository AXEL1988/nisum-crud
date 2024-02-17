import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActorUseCaseService } from '../../../../domain/actor/application/actor-use-case.service';
import { IDomainActor } from '../../../../domain/actor/domain/actor.model';
import { SnackBarService } from '../../../../domain/actor/infractructure/snack-Bar.service';
import { CreateUpdateComponent } from '../create-update/create-update.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading = false;

  displayedColumns: string[] = [
    '_id',
    'primaryName',
    'primaryProfession',
    'birthYear',
    'action',
  ];

  dataSource!: MatTableDataSource<IDomainActor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _dialog: MatDialog,
    private _snackBarService: SnackBarService,
    private _actorService: ActorUseCaseService
  ) {}

  ngOnInit(): void {
    this.getActorsList();
  }

  getActorsList(): void {
    this._actorService.getActorsLocalStorage().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        }
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEditForm() {
    const dialogRef = this._dialog.open(CreateUpdateComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getActorsList();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CreateUpdateComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getActorsList();
        }
      },
    });
  }

  deleteActor(id: string) {
    this.loading = true;
    this._actorService.delete(id);
    this._snackBarService.openSnackBar('Actor creado correctamente');
    this.loading = false;
  }
}
