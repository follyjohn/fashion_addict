<template>
  <div>
    <CNavbar expandable="md" type="dark" color="info">
      <CToggler in-navbar @click="collapsed = !collapsed" />
      <CNavbarBrand href="#">NavBar</CNavbarBrand>
      <CCollapse :show="collapsed" navbar>
        <CNavbarNav>
          <CNavItem href="#">Link</CNavItem>
          <CNavItem href="#" disabled>Disabled</CNavItem>
        </CNavbarNav>

        <!-- Right aligned nav items -->
        <CNavbarNav class="ml-auto">
          <CForm inline>
            <CInput class="mr-sm-2" placeholder="Search" size="sm" />
            <CButton
              color="secondary"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              Search
            </CButton>
          </CForm>

          <CDropdown togglerText="Lang" nav placement="bottom-end">
            <CDropdownItem>EN</CDropdownItem>
            <CDropdownItem>ES</CDropdownItem>
            <CDropdownItem>RU</CDropdownItem>
            <CDropdownItem>FA</CDropdownItem>
          </CDropdown>

          <CDropdown nav togglerText="User" placement="bottom-end">
            <CDropdownItem>Profile</CDropdownItem>
            <CDropdownItem>Signout</CDropdownItem>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
    <CCardBody>
      <CDataTable
        :items="items"
        :fields="fields"
        column-filter
        table-filter
        items-per-page-select
        :items-per-page="5"
        hover
        sorter
        pagination
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">
              {{ item.status }}
            </CBadge>
          </td>
        </template>
        <template #show_details="{item, index}">
          <td class="py-2">
            <CButton
              color="primary"
              variant="outline"
              square
              size="sm"
              @click="toggleDetails(item, index)"
            >
              {{ Boolean(item._toggled) ? "Hide" : "Show" }}
            </CButton>
          </td>
        </template>
        <template #details="{item}">
          <CCollapse
            :show="Boolean(item._toggled)"
            :duration="collapseDuration"
          >
            <CCardBody>
              <CMedia :aside-image-props="{ height: 102 }">
                <h4>
                  {{ item.username }}
                </h4>
                <p class="text-muted">User since: {{ item.registered }}</p>
                <CButton size="sm" color="info" class="">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" class="ml-1">
                  Delete
                </CButton>
              </CMedia>
            </CCardBody>
          </CCollapse>
        </template>
      </CDataTable>
    </CCardBody>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      details: [],
      collapseDuration: 0,
      collapsed: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/admin/login");
          });
        });
    }
  }
};
</script>

<style></style>
