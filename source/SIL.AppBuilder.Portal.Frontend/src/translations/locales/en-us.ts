export default {
  appName: 'Scriptoria',
  welcome: 'Welcome to Scriptoria',
  search: 'Search',

  contactUs: 'Contact Us',
  exampleForm: 'Example Form',

  updated: 'Updated!',

  opensource: 'Open Source',

  attributions: {
    title: 'Open Source Project used in Scriptoria',
    subtitle: 'Libraries used by License',
  },

  common: {
    search: 'Search',
    change: 'Change',
    save: 'Save',
    name: 'Name',
    abbreviation: 'Abbreviation',
  },

  auth: {
    title: 'Scriptoria',
    signup: 'Sign Up',
    login: 'Log In',
  },

  directory: {
    title: `Project Directory ({numProjects})`,
    filters: {
      dateRange: 'Date Range Between'
    }
  },

  header: {
    myProfile: 'My Profile',
    help: 'Help',
    signOut: 'Sign out',
    clearAll: 'Clear All',
    emptyNotifications: 'You have no notifications.'
  },

  sidebar: {
    myTasks: 'My Tasks',
    myProjects: 'My Projects',
    organizationProjects: 'Organization Projects',
    users: 'Users',
    organizationSettings: 'Organization Settings',
    projectDirectory: 'Project Directory',
    addProject: 'Add Project'
  },

  invitations: {
    orgPrompt: 'Like to sign up your organization?',
    missingTokenTitle: 'Your invitation token is missing',
    missingTokenPrompt: 'Please check the link and try again',
    orgInviteTitle: 'You have been invited to create an organization!',
    orgName: 'Organization Name',
    orgUrl: 'Organization Website URL',
    orgSubmit: 'Add Organization',
  },

  org: {
    allOrganizations: 'All Organizations',
    createSuccess: 'Organization created successfully!',
    settingsTitle: 'Organization Settings',
    selectLogo: 'Select Logo',
    productsTitle: 'Products and Publishing',
    makePrivateTitle: 'Make Projects Private by Default',
    makePrivateDescription: `
      When a new project is created, it will be defaulted to Private.
      (Private projects cannot be viewed by anyone outside of your organization)`,
    productSelectTitle: 'Select all the products you would like to make available to your organization',
    navBasic: 'Basic Info',
    navProducts: 'Products',
    navGroups: 'Groups',
    navInfrastructure: 'Infrastructure',
    infrastructureTitle: 'Infrastructure',
    useSilInfrastructureTitle: `Use SIL International's AWS Build Infrastructure`,
    groupsTitle: 'Groups',
    noGroups: 'Your organization has no groups',
    addGroupButton: 'Add Group',
    basicTitle: 'Basic Info',
    orgName: 'Organization Name',
    save: 'Save',
    buildEngineUrl: 'Build Engine URL',
    buildEngineApiAccessToken: 'Build Engine API Access Token'
  },

  products: {
  },

  profile: {
    title: 'Profile',
    pictureTitle: 'Profile Picture',
    general: 'General',
    generalInformation: 'General Information',
    updated: 'User updated successfully!',
    updatePicture: 'Update your picture at Gravatar.com',
    uploadPicture: 'Upload new picture',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    timezone: 'Timezone',
    locale: 'Locale',
    timezonePlaceholder: 'Select your timezone...',
    notificationSettingsTitle: 'Notification Settings',
    optOutOfEmailOption: 'I want to receive email notifications',
    sshSettingsTitle: 'Manage Personal SSH Keys',
    sshKeyLabel: 'SSH Key',
    visibleProfile: 'Profile visibility',
    noPhone: 'no phone added',
    noTimezone: '(GMT-0)',
    visibility: {
      visible: 'My profile information is publicly viewable',
      restricted: 'My profile information is restricted from the public'
    }
  },

  errors: {
    notFoundTitle: 'Not Found!',
    notFoundDescription: 'Something went wrong and the page or resource could not be found!',
    orgMembershipRequired: 'Organization Membership is Required',
    orgMembershipRequiredText: `
      In order to use Scriptoria, you must be a member of at least one organization.
      <br /><br />
      Please contact your organization administrator to discuss receiving an invite to
      an organization on Scriptoria.
    `,
  },

  tasks: {
    title: 'My Tasks',
    project: 'Project',
    product: 'Product',
    assignedTo: 'Assigned To',
    status: 'Status',
    waitTime: 'Wait Time',
    unclaimed: '[unclaimed]',
    noTasksTitle: 'No tasks are assigned to you.',
    noTasksDescription: 'Tasks that require your attention will appear here.',
    reassign: 'Reassign',
  },

  projects: {
    switcher: {
      myProjects: `My Projects ({numProjects})`,
      archived: `Archived ({numProjects})`,
      dropdown: {
        orgProjects: 'Organization Projects',
        myProjects: 'My Projects',
        archived: 'Archived Projects'
      }
    }
  },

  project: {
    createdOn: 'Created',
    overview: 'Overview',
    dropdown: {
      transfer: 'Transfer Ownership',
      archive: 'Archive',
      reactivate: 'Reactivate'
    },
    details: {
      title: 'Details',
      language: 'Language',
      type: 'Project Type'
    },
    products: {
      title: 'Products',
      empty: 'You have no products for this project.',
      add: 'add product'
    },
    settings: {
      title: 'Settings',
      automaticRebuild: {
        title: 'Automatic Rebuilds',
        description: 'When automatic rebuilds are on, Scriptoria will automatically rebuild your products when the input source is updated'
      },
      organizationDownloads: {
        title: 'Allow Other Organizations to download',
        description: 'When this setting is on, any Scriptoria User this is able to view your project in the Directory will be able to download your Products and their Artifacts'
      }
    },
    side: {
      repositoryLocation: 'Repository Location',
      organization: 'Organization',
      projectOwner: 'Project Owner',
      projectGroup: 'Project Group',
      reviewers: {
        title: 'Reviewers',
        add: 'add reviewer'
      }
    },
    operations: {
      archive: {
        success: 'Project archived',
        error: 'There was an error trying to archive the project'
      },
      reactivate: {
        success: 'Project reactivated',
        error: 'There was an error trying to reactivate the project'
      }
    }
  },

  users: {
    noneFound: 'No users matching the selected criteria were found.',
    title: 'Manage Users',
    table: {
      columns: {
        name: 'Name',
        role: 'Role',
        groups: 'Groups',
        disabled: 'Disabled'
      }
    }
  }


};
