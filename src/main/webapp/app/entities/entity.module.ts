import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NewthisRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { NewthisCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { NewthisLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { NewthisDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { NewthisTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { NewthisEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { NewthisJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { NewthisJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        NewthisRegionMySuffixModule,
        NewthisCountryMySuffixModule,
        NewthisLocationMySuffixModule,
        NewthisDepartmentMySuffixModule,
        NewthisTaskMySuffixModule,
        NewthisEmployeeMySuffixModule,
        NewthisJobMySuffixModule,
        NewthisJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewthisEntityModule {}
