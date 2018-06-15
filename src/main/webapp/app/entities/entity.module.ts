import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HiSampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { HiSampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { HiSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HiSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HiSampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { HiSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HiSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { HiSampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HiSampleApplicationRegionMySuffixModule,
        HiSampleApplicationCountryMySuffixModule,
        HiSampleApplicationLocationMySuffixModule,
        HiSampleApplicationDepartmentMySuffixModule,
        HiSampleApplicationTaskMySuffixModule,
        HiSampleApplicationEmployeeMySuffixModule,
        HiSampleApplicationJobMySuffixModule,
        HiSampleApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HiSampleApplicationEntityModule {}
